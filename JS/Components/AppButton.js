export default {
  template: ` 
  <button 
  :class="
  {
    'border rounded px-5 py-2 disabled:cursor-not-allowed' :true,
    'bg-blue hover:bg-blue-400': type === 'primary',
    'bg-gray hover:bg-gray-400': type === 'secondary',
    'bg-red hover:bg-red-400': type === 'danger',
    'is-loading':processing
  }"
     >
   <slot/> 
   </button>
   `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      processing: true,
    };
  },
  methods: {
    toggle() {
      alert("hie");
    },
  },
};
