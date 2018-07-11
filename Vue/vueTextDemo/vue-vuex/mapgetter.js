export default {
    computed:{
          
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'doneTodos',//方法名字
            'doneTodosCount',
        // ...
        ])
        //如果你想将一个 getter 属性另取一个名字，使用对象形式
        //mapGetters({
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
        //doneCount: 'doneTodosCount'
        //})
        
    },
}