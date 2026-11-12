import { ArrowRight } from './Icons.jsx';

export default function Button({ children, href = '#', withArrow = false }) {
  return (
    <a className="btn" href={href}>
      {children}
      {withArrow && <ArrowRight className="btn__arrow" />}
    </a>
  );
}
