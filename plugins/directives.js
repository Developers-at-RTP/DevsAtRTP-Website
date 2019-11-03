import Vue from 'vue'

Vue.directive('grid', {
    bind: function (el, binding) {
        let columns = binding.value
        el.style.display = 'grid'
        el.style.gridTemplateColumns = columns
    }
})

Vue.directive('maxWidth', {
    bind: function (el, binding) {
        let width = binding.value
        el.style.maxWidth = width
        el.style.margin = 'auto'

    }
})