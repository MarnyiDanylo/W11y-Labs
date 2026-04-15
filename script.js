const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Змінюємо стан вкладок
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');

        // Показуємо відповідний табпанель
        const selectedPanel = document.getElementById(tab.getAttribute('aria-controls'));
        tabPanels.forEach(panel => panel.hidden = true);
        if (selectedPanel) {
          selectedPanel.hidden = false;
        }
      });
    });