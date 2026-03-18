import React, { useState, useEffect, useRef, useCallback } from "react";

function formatTime(seconds) {
    if (seconds < 60) return `${seconds} сек`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (secs === 0) return `${mins} мин`;
    return `${mins} мин ${secs} сек`;
}

export default function CookingGuide({ steps, recipeName }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(steps[0]?.duration || 0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const intervalRef = useRef(null);

    const goToStep = useCallback((index) => {
        setCurrentStep(index);
        setTimeLeft(steps[index]?.duration || 0);
        setIsPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    }, [steps]);

    const nextStep = useCallback(() => {
        if (currentStep < steps.length - 1) {
            setCompletedSteps(prev =>
                prev.includes(currentStep) ? prev : [...prev, currentStep]
            );
            goToStep(currentStep + 1);
        } else {
            setCompletedSteps(prev =>
                prev.includes(currentStep) ? prev : [...prev, currentStep]
            );
            setIsPlaying(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [currentStep, steps.length, goToStep]);

    const prevStep = useCallback(() => {
        if (currentStep > 0) {
            goToStep(currentStep - 1);
        }
    }, [currentStep, goToStep]);

    useEffect(() => {
        if (isPlaying && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        nextStep();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, timeLeft, nextStep]);

    const togglePlay = () => {
        if (timeLeft <= 0) {
            setTimeLeft(steps[currentStep]?.duration || 0);
        }
        setIsPlaying(!isPlaying);
    };

    const resetGuide = () => {
        setCompletedSteps([]);
        goToStep(0);
    };

    const step = steps[currentStep];
    const progress = steps.length > 0
        ? ((completedSteps.length) / steps.length) * 100
        : 0;
    const timerProgress = step
        ? ((step.duration - timeLeft) / step.duration) * 100
        : 0;
    const allDone = completedSteps.length === steps.length;

    return (
        <div className="cooking-guide">
            <div className="guide-header">
                <h3>👨‍🍳 Пошаговый гид</h3>
                <span className="guide-recipe-name">{recipeName}</span>
            </div>

            {/* Overall Progress */}
            <div className="guide-progress-bar">
                <div className="guide-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="guide-progress-text">
                {allDone ? "🎉 Все шаги выполнены!" : `Шаг ${currentStep + 1} из ${steps.length}`}
            </div>

            {/* Step Display */}
            <div className="guide-step-display">
                <div className={`guide-step-icon ${isPlaying ? "guide-icon-pulse" : ""}`}>
                    {step.icon}
                </div>
                <h4 className="guide-step-title">{step.title}</h4>
                <p className="guide-step-description">{step.description}</p>

                {/* Timer */}
                <div className="guide-timer-container">
                    <div className="guide-timer-circle">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#e0e0e0" strokeWidth="6" />
                            <circle
                                cx="50" cy="50" r="42"
                                fill="none"
                                stroke="#4caf50"
                                strokeWidth="6"
                                strokeDasharray={`${2 * Math.PI * 42}`}
                                strokeDashoffset={`${2 * Math.PI * 42 * (1 - timerProgress / 100)}`}
                                strokeLinecap="round"
                                transform="rotate(-90 50 50)"
                                style={{ transition: "stroke-dashoffset 0.5s ease" }}
                            />
                        </svg>
                        <div className="guide-timer-text">
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="guide-controls">
                <button
                    className="guide-btn guide-btn-secondary"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                >
                    ◀ Назад
                </button>
                <button
                    className={`guide-btn guide-btn-primary ${isPlaying ? "guide-btn-pause" : ""}`}
                    onClick={togglePlay}
                >
                    {isPlaying ? "⏸ Пауза" : "▶ Старт"}
                </button>
                <button
                    className="guide-btn guide-btn-secondary"
                    onClick={nextStep}
                    disabled={currentStep === steps.length - 1 && completedSteps.includes(currentStep)}
                >
                    Далее ▶
                </button>
            </div>

            {/* Step Dots */}
            <div className="guide-steps-dots">
                {steps.map((s, i) => (
                    <button
                        key={i}
                        className={`guide-dot ${i === currentStep ? "guide-dot-active" : ""} ${completedSteps.includes(i) ? "guide-dot-done" : ""}`}
                        onClick={() => goToStep(i)}
                        title={s.title}
                    >
                        <span className="guide-dot-emoji">{s.icon}</span>
                    </button>
                ))}
            </div>

            {/* Steps List */}
            <div className="guide-steps-list">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`guide-list-item ${i === currentStep ? "guide-list-active" : ""} ${completedSteps.includes(i) ? "guide-list-done" : ""}`}
                        onClick={() => goToStep(i)}
                    >
                        <div className="guide-list-number">
                            {completedSteps.includes(i) ? "✓" : i + 1}
                        </div>
                        <div className="guide-list-content">
                            <span className="guide-list-icon">{s.icon}</span>
                            <div>
                                <strong>{s.title}</strong>
                                <span className="guide-list-duration">{formatTime(s.duration)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {allDone && (
                <div className="guide-complete">
                    <div className="guide-complete-icon">🎉</div>
                    <h4>Поздравляем!</h4>
                    <p>Блюдо готово! Приятного аппетита!</p>
                    <button className="guide-btn guide-btn-primary" onClick={resetGuide}>
                        🔄 Начать заново
                    </button>
                </div>
            )}
        </div>
    );
}
