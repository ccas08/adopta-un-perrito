import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function SocialButton({ network }) {
  const icons = {
    facebook: faFacebookF,
    twitter: faTwitter,
    linkedin: faLinkedinIn
  };

  return (
    <button className="btn btn-outline-primary rounded-circle m-1">
      <FontAwesomeIcon icon={icons[network]} />
    </button>
  );
}

  