Architecture for the app:
1. Needs to be a tray app, always running - like Cisco VPN or whatever
2. Sends either notifications (looks nicer), or makes alerts (more intrusive, but perhaps argument can be made about it working better?)
3. Each time I answer a notification or alert, my response is sent as a POST request to the backend. Which is hosted where exactly? 
4. Also written to file in format "[timestamp]: Yes" in the file log.txt
