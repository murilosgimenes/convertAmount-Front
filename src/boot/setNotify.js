import { Notify } from 'quasar';

Notify.setDefaults({
  position: 'top',
  timeout: 6000,
  progress: true,
  textColor: 'white',
  actions: [
    {
      icon: 'close',
      color: 'white'
    }
  ]
});
