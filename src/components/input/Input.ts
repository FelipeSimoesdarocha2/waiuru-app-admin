// Components
import { Checkbox } from './checkbox';
import { Password } from './password';
import { Phone } from './phone';
import { Radio } from './radio';
import { Search } from './search';
import { Subject } from './subject';
import { Text } from './text';

type CompoundedComponent = {
    Text: typeof Text;
    Radio: typeof Radio;
    Phone: typeof Phone;
    Search: typeof Search;
    Subject: typeof Subject;
    Password: typeof Password;
    Checkbox: typeof Checkbox;
};

const CompoundedInputs: CompoundedComponent = Object.assign({
    Text,
    Radio,
    Phone,
    Search,
    Subject,
    Password,
    Checkbox,
});

export default CompoundedInputs;
