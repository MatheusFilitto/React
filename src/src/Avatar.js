import { getImageUr } from './utils.js';

export default function Avatar({person, size}) {
    return (
        <img
            className="avatar"
            scr={getImageUr(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}