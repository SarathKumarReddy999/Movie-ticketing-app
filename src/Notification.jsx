import React, { useEffect } from 'react'

const Notification = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        // 1. SETUP: Start a 3-second timer
        const timerId = setTimeout(() => {
            setIsVisible(false); // Hide the notification after 3 seconds
        }, 3000);

        // 2. CLEANUP: The component is being destroyed early!
        return () => {
            // clearTimeout is a built-in JS function that destroys a pending setTimeout
            clearTimeout(timerId);
            console.log("Timer successfully cancelled to prevent memory leaks!");
        }
    }, []); // Run once on load
    // If it's not visible, render absolutely nothing (null)
  if (!isVisible) return null;
  return (
    <div style={{ background: 'green', color: 'white', padding: '10px' }}>
      {message}
    </div>
  );
}

export default Notification;