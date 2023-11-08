# object

```js
import { ref } from 'vue-core-reactivity'

const A0 = ref(0)

// triggers the effect
A0.value = 2
```

<script setup>
import ReactiveDemo from '../demo/reactive.vue'
</script>

<ReactiveDemo />