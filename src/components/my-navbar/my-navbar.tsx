import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css',
  scoped: true,
})

//TODO: Find out why styles aren't working (docs)
export class MyNavbar {
  render() {
    return (
      <div class="nav-container">
        <div class="nav-left">
          <div class="nav-left-1">
            <h2>Daryl Ruggier</h2>
          </div>
          <div class="nav-left-2">
            <h3>Test Navbar</h3>
          </div>
        </div>
        <div class="nav-right">
          <div class="nav-right-1">
            <h2>Home</h2>
          </div>
          <div class="nav-right-2">
            <h2>Projects</h2>
          </div>
          <div class="nav-right-3">
            <h2>Some other shit</h2>
          </div>
        </div>
      </div>
    );
  }
}
