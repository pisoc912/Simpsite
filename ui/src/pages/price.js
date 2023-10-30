import CheckIcon from '@mui/icons-material/Check';
import NavBar from '@/components/NavBar';
import { useUser } from '@/context/UserContext';
import PriceCard from '@/components/PriceCard';

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

export default function Price() {
    return (
        <div>
            <NavBar />
            <PriceCard />
        </div>

    )
}
