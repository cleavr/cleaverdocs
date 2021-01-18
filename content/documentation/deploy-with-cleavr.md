---
title: "Add a 'Deploy with Cleavr' button"
description: 'Canary is your safegaurd for ensuring deployments will be as expected.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

You can create a **Deploy with Cleavr** or **Deployed with Cleavr** button to add to your website or repo README file. This will open the Flash Deployment 
setup page in Cleavr and compile the form with the details of the deployment. 

**Deploy with Cleavr** is meant to point to the flash deploy section with query string parameters that will pre-populate the flash
deployment with criteria to deploy your app. 

<a href="https://cleavr.io" target="_blank"
   style="background-color: #0058F3; color: white; display: inline-flex; align-items: center; padding: 5px 15px 5px 6px; border-radius: 5px; font-family: Helvetica, Arial, sans-serif; font-size: 15px">
  <svg width="15px" height="15px" viewBox="0 0 506 393" style="margin: 0 6px 2px">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="cleaver_logo" transform="translate(-184.000000, -214.000000)">
        <g id="logo_cleaver-copy" transform="translate(184.000000, 214.000000)">
          <g id="Group" transform="translate(0.232002, 0.677165)">
            <circle id="Oval" cx="356.201069" cy="41.4992126" r="12.9259843"></circle>
            <path d="M465.051462,86.7401575 C428.314454,59.5275591 391.917604,32.3149606 359.602643,0 C290.890832,68.711811 222.179021,137.423622 153.46721,206.135433 C185.782171,238.450394 213.334927,275.527559 240.887683,312.604724 C328.648313,251.716535 427.974297,132.661417 465.051462,86.7401575 Z M347.016817,50.6834646 C341.914454,45.5811024 341.914454,37.4173228 347.016817,32.3149606 C352.119179,27.2125984 360.282958,27.2125984 365.385321,32.3149606 C370.487683,37.4173228 370.487683,45.5811024 365.385321,50.6834646 C360.282958,55.4456693 352.119179,55.4456693 347.016817,50.6834646 Z" id="Shape" fill="#E7E8E9" fill-rule="nonzero"></path>
            <g id="Shape" transform="translate(240.000000, 86.000000)" fill-rule="nonzero">
              <g id="path-4-link" fill="#000000">
                <path d="M255.325478,73.193701 C269.271935,56.525984 268.251462,33.055118 253.284533,21.829921 C243.760124,14.686614 234.575872,7.5433071 225.051462,0.7401575 C187.974297,47.001575 88.648313,165.716535 0.887683,226.604724 C7.690832,235.788976 4.289258,230.006299 11.092407,239.190551 C22.317604,254.15748 45.78847,254.837795 62.456187,240.891339 C128.10658,185.105512 199.539651,139.184252 255.325478,73.193701 Z" id="path-4"></path>
              </g>
              <g id="path-4-link" fill="#FFFFFF">
                <path d="M255.325478,73.193701 C269.271935,56.525984 268.251462,33.055118 253.284533,21.829921 C243.760124,14.686614 234.575872,7.5433071 225.051462,0.7401575 C187.974297,47.001575 88.648313,165.716535 0.887683,226.604724 C7.690832,235.788976 4.289258,230.006299 11.092407,239.190551 C22.317604,254.15748 45.78847,254.837795 62.456187,240.891339 C128.10658,185.105512 199.539651,139.184252 255.325478,73.193701 Z" id="path-4"></path>
              </g>
            </g>
            <polygon id="Rectangle-path" fill="#E7E8E9" fill-rule="nonzero" transform="translate(172.330405, 219.931744) rotate(45.000000) translate(-172.330405, -219.931744) " points="149.369996 185.746245 195.290815 185.746245 195.290815 254.117243 149.369996 254.117243"></polygon>
            <g id="Shape" transform="translate(0.000000, 202.000000)" fill-rule="nonzero">
              <g id="path-6-link" fill="#000000">
                <path d="M38.493982,188.16063 L2.09713161,151.76378 C-0.283970754,149.382677 -0.283970754,145.981102 2.09713161,143.6 L143.262486,2.434646 C145.643588,0.053543 149.045163,0.053543 151.426265,2.434646 L187.823116,38.831496 C190.204218,41.212598 190.204218,44.614173 187.823116,46.995276 L46.6577615,188.16063 C44.2766592,190.541732 40.5349269,190.541732 38.493982,188.16063 Z" id="path-6"></path>
              </g>
              <g id="path-6-link" fill="#2B2B2B">
                <path d="M38.493982,188.16063 L2.09713161,151.76378 C-0.283970754,149.382677 -0.283970754,145.981102 2.09713161,143.6 L143.262486,2.434646 C145.643588,0.053543 149.045163,0.053543 151.426265,2.434646 L187.823116,38.831496 C190.204218,41.212598 190.204218,44.614173 187.823116,46.995276 L46.6577615,188.16063 C44.2766592,190.541732 40.5349269,190.541732 38.493982,188.16063 Z" id="path-6"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <span style="margin-left:5px; letter-spacing: 0.05em;">Deploy with Cleavr</span>
</a>

**Deployed with Cleavr** is meant to be added to pages as a notice that the app was deployed with Cleavr and provides a link back to 
cleavr.io.

[<img src="https://docs.cleavr.io/images/deployed-with-cleavr.png" />](https://cleavr.io)

## Flash Deployment URL
Use the following template to create the Flash Deployment URL. 

```html
https://cleavr.io/flash
?vc-provider={{ github, gitlab, or bitbucker }}
&webapp={{ adonis, adonis4, nodejs, php, wordpress laravel, nuxtServer, nuxtStatic }}
&repository={{ repo path; ie: username/repo }}
&branch={{ master, development, etc }}
&vps-region={{ server region, ie: sfo2 }}
&db-server={{ mysql57, mysql8, etc }}
&vps-provider={{ digitalocean, vultr, linode, aws, hetzner }}
&vps-plan={{ VPS plan, ie: s-1vcpu-1gb }}
&flash=true
```

As an example, here is what the URL would look like for deploying an Adonis task list example app - 

[https://cleavr.io/flash?vc-provider=github&webapp=adonis&repository=armgitaar/taskist&branch=master&vps-region=sfo2&db-server=mysql57&vps-provider=digitalocean&vps-plan=s-1vcpu-1gb&flash=true](https://cleavr.io/flash?vc-provider=github&webapp=adonis&repository=armgitaar/taskist&branch=master&vps-region=sfo2&db-server=mysql57&vps-provider=digitalocean&vps-plan=s-1vcpu-1gb&flash=true)

## Buttons for Markdown - such as for GitHub README pages

### Deploy with Cleavr

```markdown
[<img src="https://docs.cleavr.io/images/deploy-with-cleavr.png" />](https://cleavr.io)
```

### Deployed with Cleavr

```markdown
[<img src="https://docs.cleavr.io/images/deployed-with-cleavr.png" />](https://cleavr.io)
```

## Button HTML Code

```html
<a href="{{your button url}}" target="_blank"
   style="background-color: #0058F3; color: white; display: inline-flex; align-items: center; padding: 5px 15px 5px 6px; border-radius: 5px; font-family: Helvetica, Arial, sans-serif; font-size: 15px">
  <svg width="15px" height="15px" viewBox="0 0 506 393" style="margin: 0 6px 2px">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="cleaver_logo" transform="translate(-184.000000, -214.000000)">
        <g id="logo_cleaver-copy" transform="translate(184.000000, 214.000000)">
          <g id="Group" transform="translate(0.232002, 0.677165)">
            <circle id="Oval" cx="356.201069" cy="41.4992126" r="12.9259843"></circle>
            <path d="M465.051462,86.7401575 C428.314454,59.5275591 391.917604,32.3149606 359.602643,0 C290.890832,68.711811 222.179021,137.423622 153.46721,206.135433 C185.782171,238.450394 213.334927,275.527559 240.887683,312.604724 C328.648313,251.716535 427.974297,132.661417 465.051462,86.7401575 Z M347.016817,50.6834646 C341.914454,45.5811024 341.914454,37.4173228 347.016817,32.3149606 C352.119179,27.2125984 360.282958,27.2125984 365.385321,32.3149606 C370.487683,37.4173228 370.487683,45.5811024 365.385321,50.6834646 C360.282958,55.4456693 352.119179,55.4456693 347.016817,50.6834646 Z" id="Shape" fill="#E7E8E9" fill-rule="nonzero"></path>
            <g id="Shape" transform="translate(240.000000, 86.000000)" fill-rule="nonzero">
              <g id="path-4-link" fill="#000000">
                <path d="M255.325478,73.193701 C269.271935,56.525984 268.251462,33.055118 253.284533,21.829921 C243.760124,14.686614 234.575872,7.5433071 225.051462,0.7401575 C187.974297,47.001575 88.648313,165.716535 0.887683,226.604724 C7.690832,235.788976 4.289258,230.006299 11.092407,239.190551 C22.317604,254.15748 45.78847,254.837795 62.456187,240.891339 C128.10658,185.105512 199.539651,139.184252 255.325478,73.193701 Z" id="path-4"></path>
              </g>
              <g id="path-4-link" fill="#FFFFFF">
                <path d="M255.325478,73.193701 C269.271935,56.525984 268.251462,33.055118 253.284533,21.829921 C243.760124,14.686614 234.575872,7.5433071 225.051462,0.7401575 C187.974297,47.001575 88.648313,165.716535 0.887683,226.604724 C7.690832,235.788976 4.289258,230.006299 11.092407,239.190551 C22.317604,254.15748 45.78847,254.837795 62.456187,240.891339 C128.10658,185.105512 199.539651,139.184252 255.325478,73.193701 Z" id="path-4"></path>
              </g>
            </g>
            <polygon id="Rectangle-path" fill="#E7E8E9" fill-rule="nonzero" transform="translate(172.330405, 219.931744) rotate(45.000000) translate(-172.330405, -219.931744) " points="149.369996 185.746245 195.290815 185.746245 195.290815 254.117243 149.369996 254.117243"></polygon>
            <g id="Shape" transform="translate(0.000000, 202.000000)" fill-rule="nonzero">
              <g id="path-6-link" fill="#000000">
                <path d="M38.493982,188.16063 L2.09713161,151.76378 C-0.283970754,149.382677 -0.283970754,145.981102 2.09713161,143.6 L143.262486,2.434646 C145.643588,0.053543 149.045163,0.053543 151.426265,2.434646 L187.823116,38.831496 C190.204218,41.212598 190.204218,44.614173 187.823116,46.995276 L46.6577615,188.16063 C44.2766592,190.541732 40.5349269,190.541732 38.493982,188.16063 Z" id="path-6"></path>
              </g>
              <g id="path-6-link" fill="#2B2B2B">
                <path d="M38.493982,188.16063 L2.09713161,151.76378 C-0.283970754,149.382677 -0.283970754,145.981102 2.09713161,143.6 L143.262486,2.434646 C145.643588,0.053543 149.045163,0.053543 151.426265,2.434646 L187.823116,38.831496 C190.204218,41.212598 190.204218,44.614173 187.823116,46.995276 L46.6577615,188.16063 C44.2766592,190.541732 40.5349269,190.541732 38.493982,188.16063 Z" id="path-6"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <span style="margin-left:5px; letter-spacing: 0.05em;">Deploy with Cleavr</span>
</a>
```
