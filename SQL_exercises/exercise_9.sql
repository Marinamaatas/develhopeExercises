SELECT * FROM Titanicdata WHERE SEX = 'female' AND AGE > 30;
SELECT AVG(Age) FROM Titanicdata WHERE Survived = '0' AND Sex = 'male';
SELECT * FROM Titanicdata WHERE CAST(fare AS DECIMAL(10, 2)) > 20 AND CAST(fare AS DECIMAL(10, 2)) < 50 AND embarked = 'C'; 
-- asi lo convierto en tipo numerico para hacer la comparacion
SELECT COUNT(*) FROM Titanicdata WHERE survived = '1' AND pclass = '1'
SELECT * FROM Titanicdata WHERE embarked = 'C' AND CAST(fare AS DECIMAL(10, 2)) > 75;
