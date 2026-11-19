// service worker เปล่าๆ สำหรับให้ Android แสดงแจ้งเตือนระบบได้
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:"window"}).then(l=>l[0]?l[0].focus():self.clients.openWindow("./")))});
