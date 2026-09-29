import { profile, profileSocials } from '@/data/site';
import { inlineList } from '@/utils/inline';

function SocialIcon({ name }: { name: string }) {
  const common = {
    'aria-hidden': true as const,
    viewBox: '0 0 24 24',
    width: 16,
    height: 16,
    fill: 'currentColor',
    focusable: false as const,
    style: { verticalAlign: 'middle' },
  };

  switch (name) {
    case 'linkedin':
      return <svg {...common}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>;
    case 'github':
      return <svg {...common}><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.91.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
    case 'facebook':
      return <svg {...common}><path d="M13.6 23v-10h3.36l.5-3.9H13.6V6.61c0-1.13.31-1.9 1.93-1.9h2.06V1.22A27.4 27.4 0 0 0 14.58 1c-2.99 0-5.04 1.82-5.04 5.16V9.1H6.16V13h3.38v10h4.06Z" /></svg>;
    case 'skype':
      return <svg {...common}><path d="M21.6 14.63a9.86 9.86 0 0 0 .22-2.05c0-5.48-4.44-9.92-9.92-9.92-.72 0-1.42.08-2.1.23A4.7 4.7 0 0 0 2.1 8.95a9.87 9.87 0 0 0-.22 2.04c0 5.48 4.44 9.92 9.92 9.92.71 0 1.41-.08 2.08-.22a4.7 4.7 0 0 0 7.72-6.06ZM12.1 18.3c-3.24 0-5.2-1.6-5.2-3.48a1.28 1.28 0 0 1 1.35-1.33c1.69 0 1.25 2.46 3.78 2.46 1.16 0 1.92-.62 1.92-1.42 0-.5-.25-.95-1.23-1.2l-2.58-.65c-2.08-.53-3.25-1.67-3.25-3.44 0-2.17 1.83-3.55 4.65-3.55 2.94 0 4.94 1.28 4.94 3.06 0 .7-.5 1.27-1.34 1.27-1.56 0-1.28-2.2-3.52-2.2-1.04 0-1.74.5-1.74 1.2 0 .47.3.85 1.24 1.09l2.4.58c2.38.57 3.48 1.65 3.48 3.46 0 2.25-1.94 4.15-4.9 4.15Z" /></svg>;
    default:
      return <svg {...common}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.57 6.78h-1.5c-.6 0-.72.28-.72.7v1.3h2.2l-.29 2.23h-1.91v5.72h-2.3v-5.72h-1.93v-2.23h1.93V9.27c0-1.9 1.16-2.94 2.86-2.94.81 0 1.5.06 1.66.09v2.36Z" /></svg>;
  }
}

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
              <a key={social.icon} href={social.href} aria-label={social.icon.replace('fa-brands fa-', '')} {...(social.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <SocialIcon name={social.icon.replace('fa-brands fa-', '').replace('-in', '')} />
              </a>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
