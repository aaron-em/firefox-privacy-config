// Source: https://gist.github.com/0XDE57/fbd302cef7693e62c769
// CONTROL & MISC
user_pref('dom.event.contextmenu.enabled', false);
  // Don't allow websites to prevent use of right-click, 
  // or otherwise messing with the context menu.
user_pref('dom.event.clipboardevents.enabled', false);
  // Don't allow websites to prevent copy and paste.
  // Disable notifications of copy, paste, or cut functions. 
  // Stop webpage knowing which part of the page had been selected.
user_pref('network.IDN_show_punycode', true);
  // Show punycode. Help protect from character 'spoofing' eg:
  // xn--80ak6aa92e.com -> аррӏе.com
  // [IDN homograph attacks](https://www.xudongz.com/blog/2017/idn-phishing/)
// PRIVACY SETTINGS
user_pref('plugins.enumerable_names', "");
  // Disable site reading installed plugins.
user_pref('network.http.sendRefererHeader', 0);
  // Tells website where you came from. Disabling may break some sites.
  // 0 = Disable referrer headers. 
  // 1 = Send only on clicked links.
  // 2 = (default) Send for links and image.
user_pref('network.http.sendSecureXSiteReferrer', false);
  // Disable referrer headers between https websites.
user_pref('network.http.referer.spoofSource', true);
  // Send fake referrer (if choose to send referrers).
user_pref('privacy.trackingprotection.enabled', true);
  // Mozilla’s built in tracking protection.
user_pref('geo.enabled', false);
user_pref('geo.wifi.uri', "");
user_pref('browser.search.geoip.url', "");
  // Disables geolocation and firefox logging geolocation requests.
user_pref('browser.safebrowsing.enabled', false);
user_pref('browser.safebrowsing.phishing.enabled', false);
user_pref('browser.safebrowsing.malware.enabled', false);
user_pref('browser.safebrowsing.downloads.enabled', false);
user_pref('browser.safebrowsing.provider.google4.dataSharing.enabled', "");
user_pref('browser.safebrowsing.provider.google4.updateURL', "");
user_pref('browser.safebrowsing.provider.google4.reportURL', "");
user_pref('browser.safebrowsing.provider.google4.reportPhishMistakeURL', "");
user_pref('browser.safebrowsing.provider.google4.reportMalwareMistakeURL', "");
user_pref('browser.safebrowsing.provider.google4.lists', "");
user_pref('browser.safebrowsing.provider.google4.gethashURL', "");
user_pref('browser.safebrowsing.provider.google4.dataSharingURL', "");
user_pref('browser.safebrowsing.provider.google4.dataSharing.enabled', false);
user_pref('browser.safebrowsing.provider.google4.advisoryURL', "");
user_pref('browser.safebrowsing.provider.google4.advisoryName', "");
user_pref('browser.safebrowsing.provider.google.updateURL', "");
user_pref('browser.safebrowsing.provider.google.reportURL', "");
user_pref('browser.safebrowsing.provider.google.reportPhishMistakeURL', "");
user_pref('browser.safebrowsing.provider.google.reportMalwareMistakeURL', "");
user_pref('browser.safebrowsing.provider.google.pver', "");
user_pref('browser.safebrowsing.provider.google.lists', "");
user_pref('browser.safebrowsing.provider.google.gethashURL', "");
user_pref('browser.safebrowsing.provider.google.advisoryURL', "");
user_pref('browser.safebrowsing.downloads.remote.url', "");
  // Disable Google Safe Browsing and malware and phishing protection.
  // Stop sending links and downloading lists from google.	
  // Security risk, but privacy improvement.
  // Note: this list may be incomplete as firefox updates, be sure to search for browser.safebrowsing.provider.google*
  // Also simply setting safebrowsing.*.enabled to false should make setting the URL's to blank redundant, but better to be safe.
  // If you see anything pointing google, probably best to nuke it.
user_pref('browser.selfsupport.url', "");
user_pref('browser.aboutHomeSnippets.updateUrL', "");
user_pref('browser.startup.homepage_override.mstone', ignore);
user_pref('browser.startup.homepage_override.buildID', "");
user_pref('startup.homepage_welcome_url', "");
user_pref('startup.homepage_welcome_url.additional', "");
user_pref('startup.homepage_override_url', "");
  // Can call home to every time firefox is started or home page is visited.
  // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
  // http://kb.mozillazine.org/Connections_established_on_startup_-_Firefox
user_pref('toolkit.telemetry.cachedClientID', "");
user_pref('browser.send_pings', false);
  // Prevent website tracking clicks.
user_pref('browser.send_pings.require_same_host', true);
  // Only send pings if send and receiving host match (same website).
user_pref('dom.battery.enabled', false);
  // Disable website reading how much battery your mobile device or laptop has.
user_pref('network.cookie.alwaysAcceptSessionCookies', false);
  // Disables acceptance of session cookies.
  // Disable cookies.
  // 0 = All cookies are allowed. (Default) 
  // 1 = Only cookies from the originating server are allowed. (block third party cookies)
  // 2 = No cookies are allowed. 
  // 3 = Third-party cookies are allowed only if that site has stored cookies already from a previous visit 
  // cookies are deleted at the end of the session
  // 0 = The cookie's lifetime is supplied by the server. (Default) 
  // 1 = The user is prompted for the cookie's lifetime. 
  // 2 = The cookie expires at the end of the session (when the browser closes). 
  // 3 = The cookie lasts for the number of days specified by network.cookie.lifetime.days.   
user_pref('network.dnsCacheEntries', 100);
  // Number of cached DNS entries. Lower number = More requests but less data stored.
user_pref('network.dnsCacheExpiration', 60);
  // Time DNS entries are cached in seconds.
user_pref('places.history.enabled', false);
  // Disables recording of visited websites.
user_pref('browser.formfill.enable', false);
  // Disables saving of form data.
user_pref('browser.cache.disk.enable', false);
  // Disables caching on hardrive.
user_pref('browser.cache.disk_cache_ssl', false);
  // Disables caching for ssl connections.
user_pref('browser.cache.memory.enable', false);
  // Disables caching in memory.
user_pref('browser.cache.offline.enable', false);
  // Disables offline cache.
user_pref('network.dns.disableIPv6', true);
  // If your OS or ISP does not support IPv6, there is no reason to have this preference set to false. 
user_pref('network.predictor.enabled', false);
user_pref('network.dns.disablePrefetch', true);
user_pref('network.prefetch-next', false);
  // Link prefetching is when a webpage hints to the browser that certain pages are likely to be visited, 
  // so the browser downloads them immediately so they can be displayed immediately when the user requests it. 
user_pref('network.http.speculative-parallel-limit', 0);
  // Disable prefetch link on hover.
user_pref('media.peerconnection.enabled', false);
user_pref('network.websocket.enabled', false);
  // WebSockets is a technology that makes it possible to open an interactive communication 
  // session between the user's browser and a server. (May leak IP when using proxy/VPN)
user_pref('loop.enabled', false);
  // Disable 3rd party closed-source Hello integration.
  // Note: only affects older versions of firefox as "Hello" has been discontinued as in favor of webrtc: https://support.mozilla.org/en-US/kb/hello-status
user_pref('extensions.pocket.enabled', false);
user_pref('extensions.pocket.site', "");
user_pref('extensions.pocket.oAuthConsumerKey', "");
user_pref('extensions.pocket.api', "");
  // Disable 3rd party closed-source Pocket integration.
  // Note, this is browser.pocket.enabled for older versions of firefox
// PERFORMANCE
user_pref('layout.frame_rate.precise', true);
  // Increases animation speed. May mitigate choppy scrolling.
user_pref('webgl.force-enabled', true);
user_pref('layers.acceleration.force-enabled', true);
user_pref('layers.offmainthreadcomposition.enabled', true);
user_pref('layers.offmainthreadcomposition.async-animations', true);
user_pref('layers.async-video.enabled', true);
user_pref('html5.offmainthread', true);
  // Enable Hardware Acceleration and Off Main Thread Compositing (OMTC).
  // It's likely your browser is already set to use these features.
  // May introduce instability on some hardware.
// MEMORY REDUCTION
user_pref('browser.cache.memory.capacity', 0);
  // Limit memory cache size. (xx = value in MB)
user_pref('browser.sessionhistory.max_entries', 0);
  // Limit maximum pages in session history. (how many URLs you can traverse using the Forward or Back button)
user_pref('browser.sessionstore.max_tabs_undo', 0);
  // Limit max closed tabs you can reopen.
user_pref('browser.tabs.animate', false);
user_pref('browser.download.animateNotifications', false);
  // Disable some animations.
user_pref('config.trim_on_minimize', true);
  // Reduce memory usage when minimized. (Windows only)
user_pref('image.mem.max_decoded_image_kb', 0);
  // How much info Firefox stores of uncompressed images.
  // Higher value = improve speed at the expense of increased memory usage.
user_pref('javascript.options.mem.max', 0);
  // Limit amount of memory javascript may consume.
  // -1 = Automatic
user_pref('javascript.options.mem.high_water_mark', 0);
  // Tell garbage collector to start running when javascript is using xx MB of memory. 
  // Garbage collection releases memory back to the system.
