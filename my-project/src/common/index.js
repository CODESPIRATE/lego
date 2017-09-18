import Flex from "./u-flex.vue"
import GridColumn from "./u-grid-column.vue"
import GridRow from "./u-grid-row.vue"
import Layout from "./u-layout.vue"
const Components = {
	Flex,
	GridColumn,
	GridRow,
	Layout,
}
const Library = {
    install(Vue) {
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    },
};

export default Library;