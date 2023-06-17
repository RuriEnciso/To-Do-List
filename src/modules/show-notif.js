import { notificationEl } from './global-vars.js';
// ALERT MESSAGE
function showNotification(msg) {
  // changing the msg in html
  notificationEl.innerHTML = msg;
  // showing notification
  notificationEl.classList.add('notif-enter');
  // time of notification
  setTimeout(() => {
    notificationEl.classList.remove('notif-enter');
  }, 2500);
}

export default showNotification;
