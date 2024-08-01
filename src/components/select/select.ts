// Components
import { Action } from './action';
import { Link } from './link';

type CompoundedComponent = {
    Action: typeof Action;
    Link: typeof Link;
};

const CompoundedSelect: CompoundedComponent = Object.assign({
    Action,
    Link,
});

export default CompoundedSelect;
