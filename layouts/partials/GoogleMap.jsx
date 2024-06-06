/* eslint-disable @next/next/no-sync-scripts */
const GoogleMap = () => (
  <div>
    <iframe
      width='520'
      height='400'
      frameBorder='0'
      scrolling='no'
      marginHeight='0'
      marginWidth='0'
      id='gmap_canvas'
      src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=29%20Al%20Basra,%20Mit%20Akaba,%20Agouza%20giza+(Al-hazm)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
    ></iframe>{' '}
    <a href='https://www.acadoo.de/fachrichtungen/ghostwriter-medizin/'>med. Abschlussarbeit</a>{' '}
    <script
      type='text/javascript'
      src='https://embedmaps.com/google-maps-authorization/script.js?id=66f842e83bab60c04a9b4ae2d12016a1ca7e63b9'
    ></script>
  </div>
);

export default GoogleMap;
