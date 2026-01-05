// Dashboard JavaScript - 2026 Goals Tracker

document.addEventListener('DOMContentLoaded', function() {
  updateTimeWidget();
  updateHalfYearStatus();
  // Update every minute
  setInterval(function() {
    updateTimeWidget();
    updateHalfYearStatus();
  }, 60000);
});

function updateTimeWidget() {
  const now = new Date();
  const year = 2026;
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year, 11, 31, 23, 59, 59);

  // Format current date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options);

  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    dateEl.textContent = dateStr;
  }

  // Calculate days and weeks remaining
  const msPerDay = 24 * 60 * 60 * 1000;

  let daysRemaining, weeksRemaining, yearProgress;

  if (now < startOfYear) {
    // Before 2026
    daysRemaining = Math.ceil((endOfYear - startOfYear) / msPerDay);
    weeksRemaining = 52;
    yearProgress = 0;
  } else if (now > endOfYear) {
    // After 2026
    daysRemaining = 0;
    weeksRemaining = 0;
    yearProgress = 100;
  } else {
    // During 2026
    daysRemaining = Math.ceil((endOfYear - now) / msPerDay);
    weeksRemaining = Math.ceil(daysRemaining / 7);
    const totalDays = Math.ceil((endOfYear - startOfYear) / msPerDay);
    const daysPassed = totalDays - daysRemaining;
    yearProgress = Math.round((daysPassed / totalDays) * 100);
  }

  // Update DOM
  const daysEl = document.getElementById('days-remaining');
  const weeksEl = document.getElementById('weeks-remaining');
  const progressEl = document.getElementById('year-progress-bar');
  const progressTextEl = document.getElementById('year-progress-text');

  if (daysEl) daysEl.textContent = daysRemaining;
  if (weeksEl) weeksEl.textContent = weeksRemaining;
  if (progressEl) progressEl.style.width = yearProgress + '%';
  if (progressTextEl) progressTextEl.textContent = yearProgress + '% of 2026 complete';
}

function updateHalfYearStatus() {
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;

  // H1: Jan 1 - Jun 30, 2026
  const h1Start = new Date(2026, 0, 1);
  const h1End = new Date(2026, 5, 30, 23, 59, 59);

  // H2: Jul 1 - Dec 31, 2026
  const h2Start = new Date(2026, 6, 1);
  const h2End = new Date(2026, 11, 31, 23, 59, 59);

  const h1El = document.getElementById('h1-time-remaining');
  const h2El = document.getElementById('h2-time-remaining');

  if (h1El) {
    if (now < h1Start) {
      const daysUntil = Math.ceil((h1Start - now) / msPerDay);
      h1El.textContent = `Starts in ${daysUntil} days`;
      h1El.className = 'half-time-remaining upcoming';
    } else if (now > h1End) {
      h1El.textContent = 'Completed';
      h1El.className = 'half-time-remaining completed';
    } else {
      const daysRemaining = Math.ceil((h1End - now) / msPerDay);
      const weeksRemaining = Math.ceil(daysRemaining / 7);
      h1El.textContent = `${weeksRemaining} weeks remaining`;
      h1El.className = 'half-time-remaining active';
    }
  }

  if (h2El) {
    if (now < h2Start) {
      const daysUntil = Math.ceil((h2Start - now) / msPerDay);
      h2El.textContent = `Starts in ${daysUntil} days`;
      h2El.className = 'half-time-remaining upcoming';
    } else if (now > h2End) {
      h2El.textContent = 'Completed';
      h2El.className = 'half-time-remaining completed';
    } else {
      const daysRemaining = Math.ceil((h2End - now) / msPerDay);
      const weeksRemaining = Math.ceil(daysRemaining / 7);
      h2El.textContent = `${weeksRemaining} weeks remaining`;
      h2El.className = 'half-time-remaining active';
    }
  }
}
