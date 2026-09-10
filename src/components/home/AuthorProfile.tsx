import { profile, profileSocials } from '@/data/site';
import { inlineList } from '@/utils/inline';

export default function AuthorProfile() {
  return (
    // The static site pinned this card with the jQuery "sticky-kit" plugin.
    // Native CSS stickiness does the same job without any DOM manipulation.
    <div className="author-profile pt-80 pb-80 tw:sticky tw:top-0" id="sticky_item">
      <div className="cont">
        <div className="img">
          <img src={profile.image} alt="" />
        </div>
        <div className="info text-center mt-30">
          <h5>{profile.name}</h5>
          <p>
            <a href="#0">{profile.handle}</a>
          </p>
        </div>
        <div className="social text-center mt-20">
          {inlineList(
            profileSocials.map((social) => (
              <a key={social.icon} href={social.href} {...(social.external ? { target: '_blank' } : {})}>
                <i className={social.icon}></i>
              </a>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
