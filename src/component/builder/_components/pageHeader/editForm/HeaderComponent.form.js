import baseEditForm from "bcformiojs/components/_classes/component/Component.form";
import HeaderComponentEditDisplay from "./HeaderComponent.edit.display";
export default function (...extend) {
    return baseEditForm([
        {
            key: 'display',
            components: HeaderComponentEditDisplay
        },

    ], ...extend);
}