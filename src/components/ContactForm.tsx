'use client';

interface ContactFormProps {
  /** Extra fields and button label differ between the contact and comment forms. */
  variant: 'contact' | 'comment';
}

/**
 * The contact / comment form.
 *
 * The static site posted to a `contact.php` endpoint that does not exist in
 * this repository - the site is hosted statically, so the request 404'd and the
 * success branch never ran, which is why nothing visible ever happened on
 * submit. That behaviour is preserved rather than inventing a backend: the
 * browser's own `required` validation still runs, the submit is prevented, and
 * the `.messages` slot stays in place for whenever an endpoint is wired up.
 */
export default function ContactForm({ variant }: ContactFormProps) {
  const isContact = variant === 'contact';

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form id="contact-form" method="post" action="contact.php" onSubmit={onSubmit}>
      <div className="messages"></div>

      <div className="controls row">
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input id="form_name" type="text" name="name" placeholder="Name" required />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input id="form_email" type="email" name="email" placeholder="Email" required />
          </div>
        </div>

        {isContact ? (
          <div className="col-12">
            <div className="form-group mb-30">
              <input id="form_subject" type="text" name="subject" placeholder="Subject" />
            </div>
          </div>
        ) : null}

        <div className="col-12">
          <div className={isContact ? 'form-group' : 'form-group mb-30'}>
            <textarea id="form_message" name="message" placeholder="Message" rows={4} required />
          </div>
          {isContact ? (
            <div className="mt-30">
              <button type="submit">
                <span className="text">Send A Message</span>
              </button>
            </div>
          ) : null}
        </div>

        {isContact ? null : (
          <div className="col-12 text-center mt-20">
            <button type="submit">
              <span className="text">Post comment</span>
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
