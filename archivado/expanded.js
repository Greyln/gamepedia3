document.addEventListener('DOMContentLoaded', function() {
    const appButtons = document.querySelectorAll('.app-button');
    appButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const app = button.closest('.app');
            app.classList.add('expanded');
            // Create expanded app content
            const expandedApp = document.createElement('div');
            expandedApp.classList.add('expanded-app');
            const expandedAppContent = document.createElement('div');
            expandedAppContent.classList.add('expanded-app-content');
            const appImage = app.querySelector('.app-image').cloneNode(true);
            appImage.classList.add('expanded-app-image');
            const appName = app.querySelector('.app-name').cloneNode(true);
            appName.classList.add('expanded-app-name');
            const appDetails = app.querySelector('.app-details').cloneNode(true);
            appDetails.classList.add('expanded-app-details');
            expandedAppContent.appendChild(appImage);
            expandedAppContent.appendChild(appName);
            expandedAppContent.appendChild(appDetails);
            expandedApp.appendChild(expandedAppContent);
            document.body.appendChild(expandedApp);
            // Remove expanded app when clicked outside
            expandedApp.addEventListener('click', function(event) {
                if (event.target === expandedApp) {
                    app.classList.remove('expanded');
                    expandedApp.remove();
                }
            });
        });
    });
});