import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import only the icons you need */
import { faTrash, faPlus, faEdit, faCheck, faRemove, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

/* Add icons to the library */
library.add(faTrash, faPlus, faEdit, faCheck, faRemove, faArrowUpFromBracket);

export { FontAwesomeIcon };
