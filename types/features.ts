import HdIcon from '@/assets/icons/hd-icon';
import DevicesIcon from '@/assets/icons/devices-icon';
import AdsIcon from '@/assets/icons/ads-icon';

export type FeaturesType = {
  icon: React.ComponentType<{}>;
  title: string;
  description: string;
  id: number;
};

export const featuresData: FeaturesType[] = [
  {
    icon: HdIcon,
    title: 'High-quality streaming',
    description:
      'Enjoy smooth, high-definition playback with minimal buffering, even on slower connections.',
    id: 1,
  },
  {
    icon: DevicesIcon,
    title: 'Watch on any device',
    description:
      'Stream your favorite content on your phone, tablet, laptop, or smart TV—anytime, anywhere.',
    id: 2,
  },
  {
    icon: AdsIcon,
    title: 'No ads',
    description: 'Experience uninterrupted entertainment with zero ads—just pure streaming.',
    id: 3,
  },
];
