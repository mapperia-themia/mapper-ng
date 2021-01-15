'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mapper-ng documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccordionModule.html" data-type="entity-link">AccordionModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-eefa01a70871eeba85b728dea28bdfb0"' : 'data-target="#xs-components-links-module-AppModule-eefa01a70871eeba85b728dea28bdfb0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-eefa01a70871eeba85b728dea28bdfb0"' :
                                            'id="xs-components-links-module-AppModule-eefa01a70871eeba85b728dea28bdfb0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppsModule.html" data-type="entity-link">AppsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AutocompleteModule.html" data-type="entity-link">AutocompleteModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarModule.html" data-type="entity-link">AvatarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BadgeModule.html" data-type="entity-link">BadgeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BannerModule.html" data-type="entity-link">BannerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BarModule.html" data-type="entity-link">BarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BreadcrumbModule.html" data-type="entity-link">BreadcrumbModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonModule.html" data-type="entity-link">ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ButtonModule-ce00f13e5c799e321358a369ab985f78"' : 'data-target="#xs-components-links-module-ButtonModule-ce00f13e5c799e321358a369ab985f78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ButtonModule-ce00f13e5c799e321358a369ab985f78"' :
                                            'id="xs-components-links-module-ButtonModule-ce00f13e5c799e321358a369ab985f78"' }>
                                            <li class="link">
                                                <a href="components/AnimatedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimatedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CaptchaModule.html" data-type="entity-link">CaptchaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link">CardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselModule.html" data-type="entity-link">CarouselModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartModule.html" data-type="entity-link">ChartModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CheckboxModule.html" data-type="entity-link">CheckboxModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChipModule.html" data-type="entity-link">ChipModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChipsModule.html" data-type="entity-link">ChipsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ColorpickerModule.html" data-type="entity-link">ColorpickerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContextModule.html" data-type="entity-link">ContextModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link">DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatepickerModule.html" data-type="entity-link">DatepickerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DialogModule.html" data-type="entity-link">DialogModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-3fad3ef01dd0e0319bbc89a7028d10d6"' : 'data-target="#xs-directives-links-module-DirectivesModule-3fad3ef01dd0e0319bbc89a7028d10d6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-3fad3ef01dd0e0319bbc89a7028d10d6"' :
                                        'id="xs-directives-links-module-DirectivesModule-3fad3ef01dd0e0319bbc89a7028d10d6"' }>
                                        <li class="link">
                                            <a href="directives/FilterKeyDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterKeyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MaskDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaskDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TooltipDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DividerModule.html" data-type="entity-link">DividerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocsModule.html" data-type="entity-link">DocsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocsRoutingModule.html" data-type="entity-link">DocsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DoughnutModule.html" data-type="entity-link">DoughnutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DragDropModule.html" data-type="entity-link">DragDropModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DropdownModule.html" data-type="entity-link">DropdownModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EditorModule.html" data-type="entity-link">EditorModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FieldsetModule.html" data-type="entity-link">FieldsetModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link">FileModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link">FormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryModule.html" data-type="entity-link">GalleryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/I18nModule.html" data-type="entity-link">I18nModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InplaceModule.html" data-type="entity-link">InplaceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputNumberModule.html" data-type="entity-link">InputNumberModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputPasswordModule.html" data-type="entity-link">InputPasswordModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextareaModule.html" data-type="entity-link">InputTextareaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextModule.html" data-type="entity-link">InputTextModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LineModule.html" data-type="entity-link">LineModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link">ListModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoaderModule.html" data-type="entity-link">LoaderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManusModule.html" data-type="entity-link">ManusModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapModule.html" data-type="entity-link">MapModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MediaModule.html" data-type="entity-link">MediaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MegaModule.html" data-type="entity-link">MegaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link">MessageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MiscModule.html" data-type="entity-link">MiscModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrgChartModule.html" data-type="entity-link">OrgChartModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OverlayModule.html" data-type="entity-link">OverlayModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PanelModule.html" data-type="entity-link">PanelModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PickerModule.html" data-type="entity-link">PickerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PieModule.html" data-type="entity-link">PieModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PolarModule.html" data-type="entity-link">PolarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PopupModule.html" data-type="entity-link">PopupModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProcessModule.html" data-type="entity-link">ProcessModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RadarModule.html" data-type="entity-link">RadarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RadioModule.html" data-type="entity-link">RadioModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RatingModule.html" data-type="entity-link">RatingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScrollModule.html" data-type="entity-link">ScrollModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScrollTopModule.html" data-type="entity-link">ScrollTopModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectionModule.html" data-type="entity-link">SelectionModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectorModule.html" data-type="entity-link">SelectorModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link">SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-8f6318f981a0414b3b2b4ad09c4f6029"' : 'data-target="#xs-components-links-module-SidebarModule-8f6318f981a0414b3b2b4ad09c4f6029"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-8f6318f981a0414b3b2b4ad09c4f6029"' :
                                            'id="xs-components-links-module-SidebarModule-8f6318f981a0414b3b2b4ad09c4f6029"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SideMenuModule.html" data-type="entity-link">SideMenuModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SkeletonModule.html" data-type="entity-link">SkeletonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderModule.html" data-type="entity-link">SliderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SplitterModule.html" data-type="entity-link">SplitterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StepModule.html" data-type="entity-link">StepModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SwitchModule.html" data-type="entity-link">SwitchModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link">TableModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabModule.html" data-type="entity-link">TabModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link">TagModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TerminalModule.html" data-type="entity-link">TerminalModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ToastModule.html" data-type="entity-link">ToastModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ToggleModule.html" data-type="entity-link">ToggleModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ToolbarModule.html" data-type="entity-link">ToolbarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TreeModule.html" data-type="entity-link">TreeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiBlockModule.html" data-type="entity-link">UiBlockModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UploaderModule.html" data-type="entity-link">UploaderModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Config.html" data-type="entity-link">Config</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/I18nService.html" data-type="entity-link">I18nService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Navigation.html" data-type="entity-link">Navigation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});