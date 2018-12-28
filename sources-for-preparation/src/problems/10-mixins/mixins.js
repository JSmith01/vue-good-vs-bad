
export const mixin1 = {
    methods: { calcSomeValue() { /* code here */ } }
};

export const mixin2 = {
    methods: {
        calcSomeValue() { /* code here */ },

        calcSomeVal() { /* code here */ },
    }
};

export const mixin3 = {
    methods: {
        calcSomeVal2() { return this.calcSomeValue() * 2 - 42; },
    }
};
