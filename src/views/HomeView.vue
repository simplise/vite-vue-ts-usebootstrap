<template>
  <BvNavbar expand="lg" theme="light" background-color="light">
    <BvContainer type="fluid">
      <BvNavbarBrand>Navbar</BvNavbarBrand>
      <BvNavbarToggler></BvNavbarToggler>
      <BvNavbarCollapse>
        <BvNavbarNavList margin="e-auto b-2 b-lg-0">
          <BvNavItem>
            <BvNavLink active>Home</BvNavLink>
          </BvNavItem>
          <BvNavItem>
            <BvNavLink>Link</BvNavLink>
          </BvNavItem>
          <BvNavItemDropdown>
            <BvNavItemDropdownToggle>Dropdown</BvNavItemDropdownToggle>
            <BvDropdownMenu>
              <BvDropdownItem>Action</BvDropdownItem>
              <BvDropdownItem>Another action</BvDropdownItem>
              <BvDropdownItem divider></BvDropdownItem>
              <BvDropdownItem>Something else here</BvDropdownItem>
            </BvDropdownMenu>
          </BvNavItemDropdown>
          <BvNavItem>
            <BvNavLink disabled>Disabled</BvNavLink>
          </BvNavItem>
        </BvNavbarNavList>
        <BvForm flex role="search">
          <BvFormInput margin="e-2" type="search" placeholder="Search"></BvFormInput>
          <BvButton button="outline-success" type="submit">Search</BvButton>
        </BvForm>
      </BvNavbarCollapse>
    </BvContainer>
  </BvNavbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
})
</script>
