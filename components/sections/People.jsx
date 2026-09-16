/* 08 The people */
export default function People() {
  return (
    <section className="people" id="people" data-chapter="04" data-chapter-name="Connect" aria-labelledby="people-title">
      <div className="people__stage">
        <h2 className="people__title" id="people-title">
          <span className="people__t1">Strangers today.</span>
          <span className="people__t2">Travel buddies tomorrow.</span>
        </h2>
        <div className="people__cloud">
          <figure className="pp pp--l"><img src="/assets/img/pp-selfie-900.webp" width="900" height="900" alt="A Roamers group selfie in Port Blair" loading="lazy" /><figcaption className="mono">Port Blair</figcaption></figure>
          <figure className="pp pp--m"><img src="/assets/img/pp-meal-900.webp" width="900" height="600" alt="Friends sharing a long dinner table" loading="lazy" /></figure>
          <figure className="pp pp--s"><img src="/assets/img/pp-bikers-640.webp" width="640" height="480" alt="Riders on a Ladakh highway" loading="lazy" /><figcaption className="mono">Ladakh</figcaption></figure>
          <figure className="pp pp--m pp--tall"><img src="/assets/img/pp-street-900.webp" width="900" height="1350" alt="Three friends laughing on a street" loading="lazy" /></figure>
          <figure className="pp pp--l"><img src="/assets/img/pp-rockwall-900.webp" width="900" height="1125" alt="A Roamers trek group posing after the Valley of Flowers trail" loading="lazy" /><figcaption className="mono">Valley of Flowers</figcaption></figure>
          <figure className="pp pp--s"><img src="/assets/img/pp-guitar-900.webp" width="900" height="600" alt="Hands playing a guitar" loading="lazy" /></figure>
          <figure className="pp pp--m"><img src="/assets/img/pp-ridge-900.webp" width="900" height="675" alt="Trekkers crossing a snowy ridge" loading="lazy" /><figcaption className="mono">Kedarkantha</figcaption></figure>
          <figure className="pp pp--m pp--tall"><img src="/assets/img/pp-van-900.webp" width="900" height="1349" alt="A camper van with a lit rooftop tent at night" loading="lazy" /></figure>
          <figure className="pp pp--s"><img src="/assets/img/pp-kayak-669.webp" width="669" height="446" alt="Kayaking through mangroves" loading="lazy" /><figcaption className="mono">Kerala</figcaption></figure>
          <figure className="pp pp--m"><img src="/assets/img/pp-backpackers-900.webp" width="900" height="600" alt="Backpackers laughing on a mountain trail" loading="lazy" /></figure>
          <figure className="pp pp--s"><img src="/assets/img/pp-tents-820.webp" width="820" height="600" alt="Tents pitched on snow at sunset" loading="lazy" /><figcaption className="mono">Camp, 3,400 m</figcaption></figure>
          <figure className="pp pp--m"><img src="/assets/img/pp-sunset-900.webp" width="900" height="599" alt="Friends watching the sun set over a lake" loading="lazy" /></figure>
        </div>
        <p className="people__note">Nobody here arrived knowing everyone. <a className="link link--light" href="#stories">Read their stories</a></p>
      </div>
    </section>
  );
}
