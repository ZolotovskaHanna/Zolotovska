import React from 'react';
import { Typography, Box, Container } from '@mui/material';

export default function InfoPage() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Інформаційна сторінка Туду Лісту
        </Typography>
        <Typography variant="body1" gutterBottom>
          Цей Туду Ліст дозволяє вам легко організувати свої завдання. Нижче наведено інструкції та можливості, які ви знайдете в додатку.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Можливості
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Додавання нових завдань - введіть текст завдання у полі вводу і натисніть кнопку "Enter".
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Кожне завдання має кнопку для його видалення. Просто натисніть на цю кнопку, щоб видалити конкретне завдання.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Позначте завдання як виконане, відмітивши чекбокс. Виконані завдання автоматично переміщуються у кінець списку.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Ви можете видалити всі завдання одночасно, використовуючи кнопку 'CLEAR'.
            </Typography>
            </li>
            <li>
             <Typography variant="body1">
              У нижній частині екрана відображається загальна кількість завдань.
             </Typography>    
            </li>
            <li>
             <Typography variant="body1">
              Використовуйте пошукову форму для фільтрації завдань за назвою. Після очищення поля пошуку знову відображаються всі завдання.
             </Typography>    
            </li>
        </ul>
      </Box>
    </Container>
  );
}




