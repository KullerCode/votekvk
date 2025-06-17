

    function updateCountdown() {
      // Target: Nov 4, 2025 – 6:00AM EST → in UTC it's 11:00AM UTC (EST = UTC−5)
      const targetUTC = new Date(Date.UTC(2025, 10, 4, 11, 0, 0));
      const now = new Date();

      const totalMs = targetUTC - now;
      if (totalMs <= 0) {
        document.getElementById('countdown')
                .textContent = "⏰ It's time! Election Day is here!";
        clearInterval(timerInterval);
        return;
      }

      const totalSeconds = Math.floor(totalMs / 1000);
      const days    = Math.floor(totalSeconds / 86400);
      const hours   = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      document.getElementById('days').textContent    = days;
      document.getElementById('hours').textContent   = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
