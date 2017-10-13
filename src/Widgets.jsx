import React from 'react';

// Widget registry things
const widgetRegistry = {
  mapping: {},
  get: function(name) {return this.mapping[name]},
  register: function(name, widget) { this.mapping[name] = widget },
}
export const registerWidget = widgetRegistry.register.bind(widgetRegistry);

export const makeWidget = (config, formikParams) => {
  const widget = widgetRegistry.get(config.type);
  if (widget == null) throw new Error('Unkown widget type: ' + config.type);
  return widget(config, formikParams);
};

// Define default widgets: text, email, textarea, money, date, checkbox, address, choices

const basicInputWidget = (config, formikParams) => {
  var extraProps = {};
  if (config.placeholder != null) extraProps['placeholder'] = config.placeholder;
  if (formikParams.handleChange != null) extraProps['onChange'] = formikParams.handleChange;
  return (<input type={config.type} className="form-control" id={config.name} {...extraProps} />);
}

registerWidget('text', basicInputWidget);
registerWidget('email', basicInputWidget);
registerWidget('password', basicInputWidget);
registerWidget('checkbox', (config, formikParams) => (
  <div className="form-check">
    <label className="form-check-label">
      <input className="form-check-input" onChange={formikParams.handleChange} type="checkbox" /> {config.description}
    </label>
  </div>
));
