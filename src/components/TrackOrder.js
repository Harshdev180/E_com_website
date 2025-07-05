import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TrackOrder = () => {


    const orderSteps = [
        "Order Placed",
        "Packed",
        "Shipped",
        "Out for Delivery",
        "Delivered",
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const fetchOrderStatus = () => {
        // Simulate backend response: can replace with fetch("/api/order")...
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ currentStep: 2 }); // Simulate backend saying "Shipped"
            }, 500);
        });
    };

    useEffect(() => {
        fetchOrderStatus().then((res) => {
            setCurrentStep(res.currentStep);
        });
    }, []);

    const handleManualProgress = () => {
        // This simulates a daily update or admin update
        if (currentStep < orderSteps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    // const currentStep = 3;


    return (
        <Wrapper>
            <div className="track-container">
                <h2>Track Your Order</h2>
                <div className="track-timeline">
                    {orderSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`track-step ${index < currentStep
                                ? "completed"
                                : index === currentStep
                                    ? "current"
                                    : "pending"
                                }`}
                        >
                            <div className="circle">{index < currentStep ? "✓" : index + 1}</div>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${(currentStep / (orderSteps.length - 1)) * 100}%` }}
                    ></div>

                    <button className="manual-btn" onClick={handleManualProgress}>
                        Next Day Progress
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.track-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.track-container h2 {
  color: #333;
  margin-bottom: 30px;
}

.track-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;
  padding: 0 10px;
}

.track-step {
  text-align: center;
  width: 100px;
  position: relative;
}

.track-step .circle {
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin: 0 auto 8px;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.track-step.completed .circle {
  background-color: #28a745;
}

.track-step.current .circle {
  background-color: #007bff;
}

.track-step.pending .circle {
  background-color: #ccc;
}

.track-step p {
  font-size: 14px;
  color: #555;
}

.progress-bar {
  height: 5px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;
}

.progress {
  height: 100%;
  background-color: #28a745;
  transition: width 0.4s ease;
}

`;

export default TrackOrder   