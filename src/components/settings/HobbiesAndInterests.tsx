import { Button, Grid, MultiSelect, SimpleGrid, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMemo, useState } from 'react';
import { BsMusicNote } from 'react-icons/bs';
import { MdOutlineMovie, MdOutlineScreenshotMonitor } from 'react-icons/md';
import { TfiBookmarkAlt } from 'react-icons/tfi';
import { VscBug } from 'react-icons/vsc';

// TODO: replace with redux
const initialValues = {
  hobbies: '',
  musics: [],
  tvShows: [],
  books: [],
  movies: [],
  activities: [],
};

function HobbiesAndInterests(props: SettingTapProps) {
  const [mockData, setMockData] = useState<HobbiesMockDataState>({
    musics: [],
    tvShows: [],
    books: [],
    movies: [],
    activities: [],
  });

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues,
  });

  const hasChanges = useMemo(
    () => JSON.stringify(form.values) !== JSON.stringify(initialValues),
    [form.values]
  );

  const onFormSubmit = (values: any) => {
    if (hasChanges) {
      props.onFormSubmit(hasChanges, values);
    }
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <Textarea
        label='Hobbies'
        placeholder='Your Hobbies'
        autosize
        icon={<VscBug />}
        minRows={1}
        maxRows={5}
        {...form.getInputProps('hobbies')}
      />

      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]} mt={20}>
        <MultiSelect
          label='Favorite Music Bands/Artists'
          data={mockData.musics}
          icon={<BsMusicNote />}
          placeholder='Favorite Music Bands/Artists'
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          {...form.getInputProps('musics')}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setMockData((prev) => ({
              ...prev,
              musics: [...prev.musics, item],
            }));
            return item;
          }}
        />

        <MultiSelect
          label='Favorite TV Shows'
          data={mockData.tvShows}
          icon={<MdOutlineScreenshotMonitor />}
          placeholder='Favorite TV Shows'
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          {...form.getInputProps('tvShows')}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setMockData((prev) => ({
              ...prev,
              tvShows: [...prev.tvShows, item],
            }));
            return item;
          }}
        />

        <MultiSelect
          label='Favorite Books'
          data={mockData.books}
          icon={<TfiBookmarkAlt />}
          placeholder='Favorite Books'
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          {...form.getInputProps('books')}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setMockData((prev) => ({
              ...prev,
              books: [...prev.books, item],
            }));
            return item;
          }}
        />

        <MultiSelect
          label='Favorite Movies'
          data={mockData.books}
          icon={<MdOutlineMovie />}
          placeholder='Favorite Movies'
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          {...form.getInputProps('movies')}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setMockData((prev) => ({
              ...prev,
              movies: [...prev.movies, item],
            }));
            return item;
          }}
        />

        <MultiSelect
          label='Favorite Activities'
          data={mockData.books}
          icon={<MdOutlineMovie />}
          placeholder='Favorite Activities'
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          {...form.getInputProps('activities')}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setMockData((prev) => ({
              ...prev,
              activities: [...prev.activities, item],
            }));
            return item;
          }}
        />
      </SimpleGrid>
      <Grid my='lg'>
        <Button
          type='submit'
          disabled={!hasChanges}
          loading={props.isLoading}
          radius='xl'
        >
          Save Changes
        </Button>
      </Grid>
    </form>
  );
}

export default HobbiesAndInterests;
