// Components
import { Action } from './action';
import { Link } from './link';

type CompoundedComponent = {
    Action: typeof Action;
    Link: typeof Link;
};

const CompoundedButtons: CompoundedComponent = Object.assign({
    Action,
    Link,
});

export default CompoundedButtons;
