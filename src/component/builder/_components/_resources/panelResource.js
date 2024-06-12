export default {
    title: 'Column Content',
    key: 'columnContent',
    icon: 'columns',
    schema: {
        label: "columns",
        customClass: "expressform-section_withCol",
        key: "columnContent",
        type: "well",
        input: false,
        tableView: false,
        components: [
            {
                label: "Columns",
                columns: [
                    {
                        components: [
                            {
                                html: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>",
                                label: "Content",
                                refreshOnChange: false,
                                key: "content1",
                                type: "content",
                                input: false,
                                tableView: false
                            }
                        ],
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: "md",
                        currentWidth: 8,
                        width: 8
                    },
                    {
                        components: [
                            {
                                html: "<figure class=\"image\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAUCAYAAAD1NhOsAAAABmJLR0QA/wD/AP+gvaeTAAAJdUlEQVR42u2bD1RX5RnHr6iZCjoIRCkS0zmVFGv8sVRQJng0OcsIFATk6EYbJuesMSqdxto0XastrfUHQ05tNf8s47g5oYycLbG21C2Z5s8/zTyd4dlGDZBtwbvvc30ue3i99+cP5IfY7nPO99x7n/e997338n7u+7zP+8MwXHOtc9YPegDaAq2BAtkfACmhmT5ca7B2zlT39V69Vu6jll4lz5MMrYYqoN3QfqgWqoY2QQVQSDe0k61BsMIFyjVD+0N60wtXyfO87sOz/BPKucx2srRrPugC5drnHajT0HaoDHoVOifKWqHxl9FOX6gE+gX0MEPhAtWbLSMjo29ubu5g6ZszZ84A+K/xE1BLoOscFNjhpFPGOOUxlkPfadcpI6GXAfV9rWwQ9EdRvtoP7btAcecNzM7OXgrdT9u8vLwbr/Q9ZWVlTcK9lHcI3LOzixYtWrTYT0BlXrKyx7gdOqtOGOrce6Hqrcpb1RvbY9WZ2usV+aAGKEuckgptZRFwt/BE/gh0H9cp5XLyXwsVQjXQMWiX6JRpUCV0FHobKubkgK9AkT0uyp8S/hfFfcYLf5jwk0YICKR/dCeASoKeg34HfcDP4w2oIOhb0B7ozzwv3CjatGy8uJ8MKJLboY/IMz3decehs74BfRkdNhXHNTk5OdNdoETFE8ZcqPXD/TeorMwkNWToUDU4MLBdKbMS1KHqCRZY9/NpheL6BEyzOH6M69QI3+9tws3PoB0OoWh5J4CiMG2fKF8myhqFf77wj9Ta+yL7gzV/nA9A9efQ+VLhtQQqkiGyq/cJNE3UTRRl9B7OiOOqKwHUy9bxwoULb8HxZu7EN9HIhY78DRrJKAxD/RTRyb+K+lG0jzpDUJbE14hF2Qr45lll0BT4ZtM5FNJhm4v6D+Cao2Tb5EPdDXZAoWw5ypZhm0MhIH0EAP8YUYfud3IXgKIOmGKjceqIcQ0gOX9s7xgVNWqkCdB1oaEqdfZsNS8tTY2IiDB9oWFhas+2OAKqTZ02RmlA6bIDSiYO7M5p1I7buNPZAUUjwDoWzaP+JMrqxLynp4Baq5W9wx+El70A9RttHpvAGdcW9h1nUHWgdPUEUAmOQOE4GscvoKMPw/YglAjlQXRjfbB925rTYP99aA2flwkV8uiyc8GCBaOxfRzH6bz/IfbvAxATsV1PkMI/Hv43CwoKBmE7l86D4ukcO6C4nO5nDbQJ15iKbZmo8zTB3I1JiZ8CkO99dryvSkiYbIJz5/z5qr6+XlnW2NSkioqKzLLIGyPVPw4HE1S/sgGKQqspHEqF2AD1B+7EBgNn+f/F4SNZLI9aVll6J7N8r0Gh2nvwN1A0B20S/lIf5lA3CV8Lh8OWbRFlyQ5A7eEP4nB+3/60PhyidwBqJwHEI8suaBZDtEJ01jcxsgynjswg0GhzL/RrLt8MjcT1VhMQYsR4moBC598i2jwkrvsw2k2Ar5Lq+xry4fgEA34gPz//WgZ8bzdn+Qiod3a9dJsJzM0TJ6rm5mbV0NCgSktLVUlJiTp79qxqa2szRyuq8+O1KQTUXzWgjjvcQ41DmJYs/E3aOadE2T0OQJ2H/s5q057pt1on8zdQacL3bw0OJ6DyhO8Et2lJzgVXOgA1sAeDvCC+x/8BhY5ah874BIVbNEJxhyVYvinqvQIwxsJ3F4002G6kBAaPClHYvs71foT97dA6EkGgAwX/X6xyEmC+Gdv9FBp2Aqj3OJx8EPsZ2N5N99VFoJ6H7rVREuA4uqI41YTlkXXrzFEpPT29/dyYmBjTt2PHDrPOXXdOJ6A+1YA62kmgpmlwSJMT+UIf5lCUvIjmr7ZVXtGDQN0jfKd8zPIV+/jB+4kDUN6ywTQlqOaw+CCP2vJDRj764L8rnm0ntyEzmlSHpjSHeRSlOfDui0I+yyhBAf+ztD9jxox+NKpghBq4ZMmSIBqVoFe5Y89F2fMUxvF5X4dK5LVsgHoL9cO19l7CfGgG70/xBhS2N3AIagDq6wl2Eo2y3Z2UIKCWFcwyYdlcUWHCExUV1X5uQECAamlpUftra806yTPjextQMhNmldf3IFDLuwBUkfA1c2e108pOAkXhpweKEc9yhvcH8n4UH8dw3T48dyvXMrjbeT/8ohHKDiiENAHouC9SR0f5bqhAdO4qCtVon8It7H9qJSQIOhz/kgCCnoHm6EBhRLudwjOa/+C8Ckp20CiFOrXw/Yx8NkBRan8vyp6jsJTmYuIZKqFt/sjyEVBrV6eYsHy7uNgEatWqVe3nol3TV1ZWZtZZnDOztwIVJcr/wx3F4LDQ8uc71L8coDK1rGWYD0DdLXwfi3t1Ml+BmsVZU8MGKGr7gFb/JDSWQfxYrEn+HLrDFqhLGXX2riyo8nmB3uoAjGD92gSkU31KXugLvnyd71L20E9A7Tn82ngVGBSkhoWHK4/HYwK0b98+VVVVpVpbW805VXR0tAnUtk2JBNTpXgZUuDaZPyjKjgj/IQ575vFcqzuAijAu/DrD8r8CjeIM5SoHoEI4GWP56eM9QHumsC4AlQttdgBqNmcWpVE28lbeL+fzhzBA/boE1FVgZuYRsPX3C1AeYwGtLy3N/4oJzOgxY9TWrVtVY2OjGepVV1eruPh4sywxMVZRRlCdNDZcYaA+4YXT96EGm3S7DO0e9XG+cjlp8y0+tjHVYSHayvZ5eG3qHAPXWaBSeO5kB9S4Dtm6C6NivQB3Or/jr/EygGX0a5qPPjc0EUhyLcpPC7snG+sC1bw7pnZY0JWKi5ukPjoQQaNTI61dXWGgnFTHWTdpX9DWqSzVcAjUHUCFaAvLlt7V3oEEit7hBm10U9pygi9ADeZ1rGAe5T7guVcqr9Gd0f4eK/mZ1vOHQAJ2lN/hWJvMKyVfbjP+j61QaLRXoDzGMIDyNxp9Kp5MVjOTYs2F3OCQEBUfH6Me+0GKaqobRDCdh6wONsG48C8TBV6ATRN14oR/uPDr/z6SKcomCH8ST+ZpneeH0LPcKUo5DR3t5RHpt36LOWv2KId8fRhsq62hXHeA8BVooZd8pxFaG3153vEI9ASHT/25E1rXGm5zb5E8KqznZ3qKQ0W5BjdCu6cADcyH+Bmtug9xGDlNW9KgKQpliunnSstsRro0zkDq9iV+bxsN13wczugXEyeNCko48E+MpAikXerYRYumrvVuI8Ar3dfgmmtdN/rR8ZPGhV+uUKg7yX0lrrnWdaMs3WROQvTv7ov/F3vXUo6tGC2SAAAAAElFTkSuQmCC\" alt=\"FormBuilder logo\"><figcaption> Alt Tag</figcaption></figure></figure>",
                                label: "Logo",
                                customClass: "expressform-service_logo",
                                refreshOnChange: false,
                                key: "logo",
                                type: "content",
                                input: false,
                                tableView: false
                            }
                        ],
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: "md",
                        currentWidth: 4,
                        width: 4
                    }
                ],
                customClass: "expressform-col-80_20",
                key: "columns1",
                type: "columns",
                input: false,
                tableView: false
            }
        ]

    },
    weight: 45,
}