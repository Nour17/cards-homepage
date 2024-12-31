import { IconProps } from '../../lib/types/icon'

export default function IconShieldSolid(props: IconProps = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28" fill="none"
      width={props.width || props.size || '28px'}
      height={props.height || props.size || '28px'}
    >
      <path d="M13.5596 2.14208C13.8218 1.95264 14.1759 1.95264 14.4381 2.14208C15.0807 2.60639 16.526 3.45355 18.335 4.18311C20.1454 4.9133 22.2575 5.5 24.2476 5.5C24.6618 5.5 24.9976 5.83579 24.9976 6.25V14.002C24.9976 17.0293 23.295 19.8431 21.1605 21.9516C19.0272 24.0589 16.3331 25.5914 14.1275 25.9756L13.9988 25.998L13.8701 25.9756C11.6645 25.5914 8.97042 24.0589 6.83716 21.9516C4.70264 19.8431 3 17.0293 3 14.002V6.25C3 5.83579 3.33579 5.5 3.75 5.5C5.74138 5.5 7.85341 4.91328 9.6635 4.18313C11.4721 3.45359 12.9169 2.60645 13.5596 2.14208Z" fill="url(#paint0_radial_1190_18675)" />
      <defs>
        <radialGradient id="paint0_radial_1190_18675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.64193 -11.4989) rotate(53.9995) scale(57.4728 51.0658)">
          <stop offset="0.337728" stop-color="#0FAFFF" />
          <stop offset="0.529425" stop-color="#367AF2" />
          <stop offset="0.682436" stop-color="#5750E2" />
          <stop offset="0.860903" stop-color="#CC23D1" />
        </radialGradient>
      </defs>
    </svg>
  )
}