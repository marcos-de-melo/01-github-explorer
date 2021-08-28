import { Couter } from './components/Counter';
import { Repositirylist } from './components/RepositoryList';
import './styles/global.scss';

export function App(){
  
    return (
        <>
            <Repositirylist/>
            <Couter/>
        </>
    );
}