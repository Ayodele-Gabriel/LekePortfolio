import { GradientTxt } from '../../component'
import { getMobileOperatingSystem } from '../../helpers'

const FluxLink = () => {
  const link = () => {
    switch (getMobileOperatingSystem()) {
      case 'iOS':
        return 'https://apps.apple.com/us/app/flux-pay/id1534426282'
      default:
        return 'https://play.google.com/store/apps/details?id=com.fluxpayment'
    }
  }
  return (
    <GradientTxt>
      <a href={link()} target="_blank" rel="noreferrer">
        Download Flux
      </a>
    </GradientTxt>
  )
}

export default FluxLink
