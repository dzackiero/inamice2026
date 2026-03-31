import Speakers from '../../../components/sections/Speakers';
import Rundown from '../../../components/sections/Rundown';

export default function MainEventPage() {
    return (
        <div className="pt-24 bg-white">
            <Speakers />
            <Rundown />
        </div>
    );
}
