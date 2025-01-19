import { Parallax } from 'react-parallax';
import PLC from '../assets/images/plc.webp';

const Container = () => (
    <Parallax className='parallax' bgImage={PLC} bgImageAlt="PLC" strength={600}>
    </Parallax>
);

export default Container;