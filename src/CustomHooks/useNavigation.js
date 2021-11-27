import { useNavigate} from 'react-router-dom';


const useNavigation = () => {
    const navigate = useNavigate();
    const goTo = to => navigate(to)
	return {goTo};
};

export default useNavigation;
