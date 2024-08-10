# USA Crime Rate Visualization Project

This project visualizes crime rates across the USA using a React component with Vite for the build setup. The map displays state-level crime data with interactive features, including tooltips, dynamic category selection, and animated markers.

## Features

- **Interactive Map**: Hover over states to view detailed crime rate information via tooltips.
- **Dynamic Data Filtering**: Filter crime data by category and limits.
- **Animated Markers**: Pulsing dots and connecting lines represent crime data visually.
- **Responsive Design**: The map and dashboard adapt to different screen sizes using Tailwind CSS.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast build and development setup with Hot Module Replacement (HMR).
- **Tailwind CSS**: For styling the application with a modern and responsive layout.
- **D3.js**: For creating data-driven visualizations.
- **Material-UI (MUI)**: For additional UI components like tooltips.
- **Framer Motion**: For adding animations to the markers.

## Usage

- **View Crime Data**: Hover over states to see crime rates in tooltips.
- **Filter Data**: Use the dropdown to select different crime categories.
- **Adjust Limits**: Click on the limit buttons to adjust the data visualization based on predefined crime rate limits.

## Project Structure

- `src/components`: Contains the main React components for the map and dashboard.
- `src/icons`: Custom icons for fixed sections.
- `src/.json`: JSON files with crime data and GeoJSON for the map.
- `src/pages`: Main pages of application.

## Customization

- **Tailwind CSS**: Modify `tailwind.config.js` to adjust the styling.
- **Crime Data**: Update the JSON files in `src/.json` with new or additional data.
- **Map Features**: Adjust the D3.js code in the map component for custom visualizations.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Author

Metin Isakhanli - [LinkedIn](https://www.linkedin.com/in/metin-isakhanli-217374266/)

---

Feel free to reach out if you have any questions or need further assistance!
