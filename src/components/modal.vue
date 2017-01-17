<template id="modal">
  <transition name="modal">
     <div class="modal-mask" v-show="show">
          <div class="modal-container">
                <div class="modal-content" :style='styles'>
                     <div class="header">
                           <slot name='header'>
                             <span class="close" v-on:click='close'>×</span>
                             <span class="big" v-on:click='bigst'></span>
                             <span class="small" v-on:click= 'smallst'>-</span>
                           </slot>
                     </div>
                     <div class="body">
                           <slot name='body'>
                                 default body
                           </slot>
                     </div>
                     <div class="footer">
                           <slot name='footer'>
                              <button v-on:click='close'>close</button>
                           </slot>
                     </div>
                </div>
            </div>
     </div>
  </transition>
</template> 

<script>
export default {
  name: 'modal',
  props: ['styles', 'bigst','smallst'],
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      close: function () {
        this.show = ! this.show;
      }
    }
}
</script>

<style>
.modal-mask
         {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s ease;
         }
         .modal-container
         {
            position: absolute;
            top: 50%;
          left: 50%;
          transform:translate(-50%,-50%);
         }
         .modal-content
         {
        width: 300px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;

         }
         .modal-enter .modal-content,
         .modal-leave .modal-content
         {
            transform: scale(1.1); /* 标准语法 */
         }

         // 过渡效果
        .modal-enter-active{
          transition: all .5s ease;
          opacity:1;
        }
        .modal-enter{
          opacity:0;
        }

        .modal-leave-active {
          transition: all .5s ease;
          opacity:0;
        }
        .modal-leave{
          opacity:1;
        }
        .header{
          height: 30px;
          line-height: 30px;
          padding: 5px 10px;
        }
        .header span{display: inline-block; float: right; color: #ccc; font-size: 22px; margin:3px;width: 15px;height: 15px; line-height: 15px; font-weight:normal; font-family: "宋体";}
        .header .big{width: 13px;height: 13px;border: 1px solid #ccc}
</style>