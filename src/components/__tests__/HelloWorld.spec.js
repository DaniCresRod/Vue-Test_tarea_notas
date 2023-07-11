import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import TablaResultados from '../TablaResultados.vue';

// const wrapper = mount(HomeView, { props: { msg: 'Hello Vitest' } });
const wrapper = mount(HomeView);

describe('HomeView', () => {
  it('has the <header> tag', () => {
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it('has the <main> tag', () => {
    expect(wrapper.find("main").exists()).toBe(true);
  });

  it('has a component child', () => {
    expect(wrapper.findComponent(TablaResultados).exists()).toBe(true);
  });

  it('has a correct class in the html tags', ()=>{

    expect(wrapper.html().includes("myClass")).toBe(true);
  });

  it('has a correct id attribute in the tags', ()=>{
    expect(wrapper.html().includes('id="myTable"')).toBe(true);
    //expect(wrapper.find('#myTable')).toBe(true);
  });

  it('has a component that receives props', async ()=>{

    const wrapper2= mount(TablaResultados);

    await wrapper2.setProps({
      arrayOfPeople:[{name:"marianin", subject:"anatomia", mark:6}]
    });    

    expect(wrapper2.vm.arrayOfPeople).toStrictEqual([{name:'marianin', subject:'anatomia', mark:6}]);
  });

  it('has the name of the student in the table after clicking the "add"Button', async ()=>{
    
    const wrapper = shallowMount(HomeView);
    // wrapper.find("#input_Name").element.value="Prueba_Nombre";
    // wrapper.find("#input_Subject").element.value="Prueba_asignatura";
    // wrapper.find("#input_Mark").element.value="10";

    // await wrapper.find("#input_Name").setValue("Prueba_nombre");
    // await wrapper.find("#input_Subject").setValue("Prueba_asignatura");
    // await wrapper.find("#input_Mark").setValue(10);
    
    await wrapper.find("#input_Name").userEvent.type("Prueba_Nombre");


    await wrapper.find("header div button").trigger('click');
    
    
    //expect(wrapper.find("#myTable tr:last-of-type td").element.textContent).toBe("Prueba_nombre");
    expect(wrapper.find("#input_Name").element.value).toBe("Prueba_nombre");

  });
  //https://lmiller1990.github.io/vue-testing-handbook/simulating-user-input.html#a-real-world-example
  //https://lmiller1990.github.io/vue-testing-handbook/testing-emitted-events.html#write-a-component-and-test





})
