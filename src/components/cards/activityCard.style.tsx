import { Text, TouchableOpacity, View } from 'react-native';
import { activityCardStyle } from './cards.style';
import { IActivitycard } from '@src/common/interfaces';
import { EnActivity, EnTopTen } from '@src/common/enums';
import { useTranslation } from 'react-i18next';

const CActivityCard = ({
  type,
  song,
  movie,
  description,
  artist,
  action,
  user,
}: IActivitycard): JSX.Element => {
  const { t } = useTranslation();
  let actionContent;
  switch (action) {
    case EnActivity.Commented:
      actionContent = t('writed-comment');
      break;
    case EnActivity.Starred:
      actionContent = `${t('starred-comment')} @${user}`;
      break;
    case EnActivity.TopTen:
      actionContent = t('added-to-top10');
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity style={activityCardStyle.container}>
      <Text
        style={{
          flex: 1,
          fontWeight: '900',
          fontSize: 20,
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        {type === EnTopTen.Music ? artist : movie}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
        }}
      >
        {type === EnTopTen.Music ? song : description}
      </Text>
      <View style={{ width: '100%', marginTop: 5 }}>
        <Text style={{ fontSize: 12 }}>{actionContent}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CActivityCard;
